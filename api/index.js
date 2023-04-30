
import axios from "axios"

const url = 'http://127.0.0.1:3000/'

class API {
    async login(username, password) {
        const message = await axios.post(url+'login', {'username': username, 'password': password})
        const data = message.data
        return data
    }

    async signIn(username, password, realname) {
        const message = await axios.post(url+'signIn',
            {'username': username, 'password': password, 'realname': realname}
        )
        const data = message.data
        return data
    }

    async logout() {
        await axios.get(url+'logout')
    }

    async getNote() {
        const message = await axios.get(url+'note')
        const data = message.data
        return data?data:[]
    }

    async deleteNote(id) {
        const message = await axios.delete(url+'note'+'?id='+id)
        const data = message.data
        return data
    }
    
    async addNote(title, content) {
        const message = await axios.post(url+'note',
            {
                'title': title,
                'content': content
            }
        )
        const data = message.data
        return data
    }

    async editNote(id ,title, content) {
        const message = await axios.put(url+'note',
            {
                'id': id,
                'title': title,
                'content': content
            }
        )
        const data = message.data
        return data
    }

}

export default new API()
