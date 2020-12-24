import getConnection from './index'

const connection = getConnection()

export default {
    getAllLists: () => {
        const query = 'SELECT * FROM lists'
       return  new Promise((resolve, reject) => 
       connection.query(query, [], (err, res) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            console.log(res)
            resolve(res)

        })
        )
    },
    updateListsTitle: (title, id) => {
            const query = 'UPDATE lists SET title=? WHERE id=?'
           return  new Promise((resolve, reject) =>
                connection.query(query, [title, id], (err, res) => {
                        if (err) {
                            reject(err)
                        }
                        resolve(res)
                    })
                    )
                }
            }