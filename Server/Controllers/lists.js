import Router from 'express'
import ListManager from '../DB/listManager'

const listRouter = Router()

listRouter.post('/update-title', async (req, res) => {
    const{title, id} = req.body
    const lists = await ListManager.updateListsTitle(title,id)
        res.send(lists)
   
    })

    listRouter.get('/', async (req, res) => {
        const lists = await ListManager.getAllLists()
        res.send(lists)
    })

    export default listRouter
