import {
    DataProvider,
    GetListParams,
    GetOneParams,
    GetManyParams,
    GetManyReferenceParams,
    CreateParams,
    UpdateParams,
    DeleteParams,
    fetchUtils,
    GetListResult,
    GetOneResult,
    GetManyResult,
    GetManyReferenceResult,
    CreateResult,
    UpdateResult,
    UpdateManyParams,
    UpdateManyResult,
    DeleteResult,
    DeleteManyResult,
    DeleteManyParams
} from 'react-admin';

const apiUrl = "http://localhost:8000";
const httpClient = (url: string, options: any) => {
    if (!options.headers) {
        options.headers = new Headers({ 'Accept': 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};;

const myDataProvider: DataProvider = {
    getList: async (resource: string, params: GetListParams): Promise<GetListResult> => {
        const { page, perPage } = params.pagination!;
        const { field, order } = params.sort!;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        // const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
        const url = `${apiUrl}/${resource}`;

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });
        const data = await response.json();

        // const total = parseInt(response.headers.get('Content-Range')?.split('/').pop() || '0', 10);
        const total = data.length

        return {
            data: data,
            total: total,
        };
    },

    getOne: async (resource: string, params: GetOneParams): Promise<GetOneResult> => {
        const url = `${apiUrl}/${resource}/${params.id}`
        const { json } = await httpClient(url, { signal: params.signal });
        return { data: json };
    },

    getMany: async (resource: string, params: GetManyParams): Promise<GetManyResult> => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
        const { json } = await httpClient(url, { signal: params.signal });
        return { data: json };
    },


    getManyReference: async (resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult> => {
        // Реализация для получения связанных данных
    },
    create: async (resource: string, params: CreateParams): Promise<CreateResult> => {
        // Реализация для создания нового ресурса
    },
    update: async (resource: string, params: UpdateParams): Promise<UpdateResult> => {
        // Реализация для обновления существующего ресурса
    },
    updateMany: async (resource: string, params: UpdateManyParams): Promise<UpdateManyResult> => {
        // Реализация для обновления нескольких ресурсов
        // Нет стандартного типа для updateMany, используйте тип из UpdateParams
    },
    delete: async (resource: string, params: DeleteParams): Promise<DeleteResult> => {
        // Реализация для удаления ресурса
    },
    deleteMany: async (resource: string, params: DeleteManyParams): Promise<DeleteManyResult> => {
        // Реализация для удаления нескольких ресурсов
        // Нет стандартного типа для deleteMany, используйте тип из DeleteParams
    },
};

export default myDataProvider;