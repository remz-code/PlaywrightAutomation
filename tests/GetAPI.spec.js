const {test,expect}=require('@playwright/test')


test('Get API Request',async({request})=>
{
const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
 
expect(response.status()).toBe(200)

const responsebody=await response.json();

expect(responsebody).toHaveProperty('id');//validate that the response body contains all required fields
expect(responsebody.id).toBe(1)
expect(responsebody.name).toBe("Leanne Graham")
expect(responsebody.username).toBe("Bret")
expect(responsebody.email).toContain('@')
expect(responsebody.company.name).toBe('Romaguera-Crona')
//response time validation

const startTime=Date.now();
const endTime=Date.now();
expect(endTime-startTime).toBeLessThan(3000)

console.log(responsebody)
})