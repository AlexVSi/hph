import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "src/pipes/validation.pipe";
import * as cors from 'cors';

async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Backend for hph.md')
        .setDescription('REST API documentatation')
        .setVersion('1.0.0')
        .addTag('AlexVSi')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.use(cors())

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
}

start()
