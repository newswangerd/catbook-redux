class HobbyApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

  static getAllHobbies() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:5000/api/v1/hobbies', {
      method: 'GET', 
      headers: headers
    })
    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
}

export default HobbyApi;
