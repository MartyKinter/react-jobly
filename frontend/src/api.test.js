// import JoblyApi from './api';
import JoblyApi from './api';

describe('/auth routes', () => {

    test("login", async function() {
        const res = await JoblyApi.login("testuser", "password");
        expect(res.toBeInstanceof(String));
    });

});