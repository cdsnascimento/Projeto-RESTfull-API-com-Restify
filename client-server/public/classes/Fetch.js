class Fetch{

    static get(route, params = {}){

        return Fetch.request('GET', route, params);

    }

    static delete(route, params = {}){

        return Fetch.request('DELETE', route, params);

    }

    static put(route, params = {}){

        return Fetch.request('PUT', route, params);

    }

    static post(route, params = {}){

        return Fetch.request('POST', route, params);

    }

    static request(method, route, params = {}){

        return new Promise((resolve, reject) => {
            let request;
            switch (method.toLowerCase()){
                case 'get':
                    request = route;
                    break;
                default:
                request = new Request(route, {
                    method,
                    body: JSON.stringify(params),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })
                });
            }

            fetch(request).then(response=>{
                response.json().then(json=>{
                    resolve(json);
                }).catch(e=>{
                    reject(e);
                });
            }).catch(e=>{
                reject(e);
            });

        });
        
    }

}