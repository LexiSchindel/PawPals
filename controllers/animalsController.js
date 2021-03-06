const { animalsQ } = require("./queries.js");
const db = require("./postgresPool");

const addAnimal = (params) => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.addAnimal, params, (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) resolve(res.rows);
            else reject("no data");
        });
    });
};

const updateAnimal = (params) => {
  return new Promise((resolve, reject) => {
    db.query(animalsQ.updateAnimal, params, (error, res) => {
      if(error) reject(error.stack);
      if(res != undefined) resolve(res.rows);
      else reject('no data');
    })
  })
};

const addDisposition = (params) => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.addDisposition, params, (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) resolve(res.rows);
            else reject("no data");
        });
    });
};

const deleteDispositions = (params) => {
  return new Promise((resolve, reject) => {
    db.query(animalsQ.deleteDispositions, params, (error, res) => {
      if(error) reject(error.stack);
      if(res != undefined) resolve(res.rows);
      else reject('no data');
    })
  })
};

const updateAvailability = (params) => {
  return new Promise((resolve, reject) => {
    db.query(animalsQ.updateAvailability, params, (error, res) => {
      if(error) {
        reject(error.stack);
      }
      if(res != undefined) resolve(res.rows);
      else reject('no data');
    })
  })
}

const getAnimal = (params) => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.getAnimal, params, (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) {
                resolve(res.rows);
            } else {
                reject("no data");
            }
        });
    });
};

const getAnimalsWiAllFilter = ({ userID, atype, gender, breed, availability }) => {
    return new Promise((resolve, reject) => {
        
        let query = animalsQ.getAllWiFav;
        let where = "";
        let and = [];

        if (atype) {
            and.push(`t.id=${atype}`);
        }
        if (gender) {
            and.push(`an.gender=${gender}`);
        }
        if (breed) {
            and.push(`an.breedID=${breed}`);
        }
        if (availability) {
          and.push(`an.availabilityID=${availability}`);
        }
        if (and.length > 0) {
            where = `WHERE ${and.join(" AND ")}`;
        }

        query += " " + where;

        db.query(query, [userID], (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) {
                resolve(res.rows);
            } else {
                reject("no data");
            }
        });
    });
};

const getAnimalsWiFavs = (id) => {
  return new Promise((resolve, reject) => {
      db.query(animalsQ.getAllWiFav, id, (error, res) => {
          if (error) reject(error.stack);
          if (res != undefined) {
              resolve(res.rows);
          } else {
              reject("no data");
          }
      });
  });
};

const getAvailabilities = () => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.getAvailabilities, [], (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) {
                resolve(res.rows);
            } else {
                reject("no data");
            }
        });
    });
};

const getBreeds = () => {
  return new Promise((resolve, reject) => {
    db.query(animalsQ.getBreeds, [], (error, res) => {
      if(error) reject(error.stack);
      if(res != undefined) {
        resolve(res.rows);
      }
      else {
        reject('no data')
      };
    });
  });  
}

const getBreedsWithID = (atypeid) => {
    return new Promise((resolve, reject) => {
      db.query(animalsQ.getBreedsWithID, atypeid, (error, res) => {
        if(error) reject(error.stack);
        if(res != undefined) {
          resolve(res.rows);
        }
        else {
          reject('no data')
        };
      });
    });  
  }

const getDispositions = () => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.getDispositions, [], (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) {
                resolve(res.rows);
            } else {
                reject("no data");
            }
        });
    });
};

const getTypes = () => {
    return new Promise((resolve, reject) => {
        db.query(animalsQ.getTypes, [], (error, res) => {
            if (error) reject(error.stack);
            if (res != undefined) {
                resolve(res.rows);
            } else {
                reject("no data");
            }
        });
    });
};

module.exports = {
  addAnimal,
  getAnimal,
  addDisposition,
  deleteDispositions,
  updateAvailability,
  getAnimalsWiFavs,
  getAvailabilities,
  getBreeds,
  getDispositions,
  getTypes,
  updateAnimal,
  getAnimalsWiAllFilter,
  getBreedsWithID
};