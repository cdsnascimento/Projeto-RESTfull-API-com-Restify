class HttpRequest{

    static get(route, paramns = {}){

        return HttpRequest.request('GET', route, paramns);

    }

    static delete(route, paramns = {}){

        return HttpRequest.request('DELETE', route, paramns);

    }

    static put(route, paramns = {}){

        return HttpRequest.request('PUT', route, paramns);

    }

    static post(route, paramns = {}){

        return HttpRequest.request('POST', route, paramns);

    }

    static request(method, route, params = {}){

        return new Promise((resolve, reject) => {
           
            let ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), route);

            ajax.onerror = event => {

                reject(event);    

            }
    
            ajax.onload = event =>{
                
                let obj = {};
    
                try {
                    obj = JSON.parse(ajax.responseText);
                } catch (e) {
                    reject(e);
                    console.error(e);
                } 

                resolve(obj);
    
            };
    
            ajax.send();

        });
        

    }

}