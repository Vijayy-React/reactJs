import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [data, setData] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
    ])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data);
            setData(res.data)
        })
        .catch((error) => {

        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {

        })
    }

  return (
    <div>
        
        <table border={"2"}>
            {
                data.map((el) => {
                    return <tr>
                        <td>{el.id}</td>
                        <td>{el.userId}</td>
                        <td>{el.title}</td>
                        <td>{el.body}</td>
                        <td><button onClick={() => deleteHandler(el.id)}>Delete</button></td>
                    </tr>
                })
            }
            
        </table>
    </div>
  )
}

export default Posts