function questionName(input) {

  switch (input) {
    case 200:
      return `Status Code : ${input} Result : PASS - OK: Request successful`;
     

    case 201:
      return `Status Code : ${input} Result : PASS - Created: Resource created successfully`;
  

    case 301:
     return`Status Code : ${input} Result : WARNING - Moved Permanently: URL has changed`;
 

    case 400:
     return`Status Code : ${input} Result : FAIL - Bad Request: Check request payload`;


    case 401:
      return`Status Code : ${input} Result : FAIL - Unauthorized: Check auth token`;


    case 403:
      return `Status Code : ${input} Result : FAIL - Forbidden: Insufficient permissions`;
      

    case 404:
      return `Status Code : ${input} Result : FAIL - Not Found: Check endpoint URL`;
 

    case 500:
      return `Status Code : ${input} Result : FAIL - Internal Server Error: Backend issue`;
    

    default:
      return `UNKNOWN - Unhandled status code`;
  }
}

let result= questionName(401)
console.log(result)

// 2nd question//

