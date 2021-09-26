import React from 'react'


const Administration = () => {
    return (
        <div id='admin-page'>
        <div id="type-selector"  >
            <div className='grid col-2' style={{textAlign:"center"}}>
                <div style={{borderRight:"2px solid white"}}>
                     <div>Movies</div>
                </div>
                <div>
                    <div>Tv Show</div>
                </div>
               
            </div>
        </div>
        
        <table id='content-table' className=''>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Featured</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Batman</td>
                <td>9.6</td>
                <td>
                    <input type="checkbox" name="featured" id="featured" />
                </td>
                <td>edit</td>
                <td>delete</td>
            </tr>
        </table>
        
    </div>
    )
}

export default Administration
