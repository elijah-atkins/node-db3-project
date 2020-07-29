module.exports = {
    intToBoolean,
    booleanToint,
    schemeToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function schemeToBody(project) {
    const result = {
      ...project,
      completed: intToBoolean(project.completed),
    };
  
    if (project.schemes) {
      result.schemes = project.schemes.map(scheme => ({
        ...scheme,
        completed: intToBoolean(scheme.completed),
      }));
    }
  
    return result;
  }
