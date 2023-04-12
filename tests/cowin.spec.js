const { test, expect } = require("@playwright/test");

test.only("get states", async({request,baseURL})=>{
    const _response = await request.get(("https://cdn-api.co-vin.in/api/v2/admin/location/states"),{
        params: {
            state_name: "Assam"
        }
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
})