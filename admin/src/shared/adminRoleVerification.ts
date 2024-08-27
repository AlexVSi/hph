export const adminRoleVerification = async (email: string): Promise<boolean> => {
    try {
        const request = new Request('http://localhost:8000/users/get-roles', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        const response = await fetch(request)

        const data = await response.json();
        const roles: String[] = []

        data.forEach((item: any) => {
            roles.push(item.role)
        });

        return roles.includes('ADMIN')
    } catch (e) {
        console.log(e);
        return false
    }
}
