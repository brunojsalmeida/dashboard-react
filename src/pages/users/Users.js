import './Users.css';
import { FiLogIn, FiEdit } from 'react-icons/fi';
import homem1 from '../../assets/homem-adulto.png'

const Users = () => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope='col'></th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Orders</th>
                        <th scope='col'>Spent</th>
                        <th scope='cil'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='check'></td>
                        <td className='card-name' data-label='Name'>
                        <img width="30" src={homem1} alt="homem1" />
                        <div>
                        <h3>Carson Darrin</h3>
                        <p>carson.darrin@devias.io</p>
                        </div>
                        </td>
                        <td data-label='Location'>Cleveland, Ohio, USA</td>
                        <td data-label='Orders'>3</td>
                        <td data-label='Spent'>$300.00</td>
                        <td>
                            <button className='action'>
                                <FiEdit />
                            </button>
                            <button className='action'>
                                <FiLogIn />
                            </button>
                        </td>   
                    </tr>
                    <tr>
                        <td data-label='check'></td>
                        <td className='card-name' data-label='Name'>
                        <img width="30" src={homem1} alt="homem1" />
                        <div>
                        <h3>Fran Perez</h3>
                        <p>fran.perez@devias.io</p>
                        </div>
                        </td>
                        <td data-label='Location'>Atlanta, Georgia, USA</td>
                        <td data-label='Orders'>0</td>
                        <td data-label='Spent'>$0.00</td>   
                        <td>
                            <button className='action'>
                                <FiEdit />
                            </button>
                            <button className='action'>
                                <FiLogIn />
                            </button>
                        </td> 
                    </tr>
                    <tr>
                        <td data-label='check'></td>
                        <td className='card-name' data-label='Name'>
                        <img width="30" src={homem1} alt="homem1" />
                        <div>
                        <h3>Jie Yan Song</h3>
                        <p>Jie.yan.song@devias.io</p>
                        </div>
                        </td>
                        <td data-label='Location'>North Canton, Ohio, USA</td>
                        <td data-label='Orders'>6</td>
                        <td data-label='Spent'>$5.600.00</td>   
                        <td>
                            <button className='action'>
                                <FiEdit />
                            </button>
                            <button className='action'>
                                <FiLogIn />
                            </button>
                        </td> 
                    </tr>
                    <tr>
                        <td data-label='check'></td>
                        <td className='card-name' data-label='Name'>
                        <img width="30" src={homem1} alt="homem1" />
                        <div>
                        <h3>Jane Rotanson</h3>
                        <p>jane.rotanson@devias.io</p>
                        </div>
                        </td>
                        <td data-label='Location'>Madrid, Madrid, Spain</td>
                        <td data-label='Orders'>1</td>
                        <td data-label='Spent'>$500.00</td>   
                        <td>
                            <button className='action'>
                                <FiEdit />
                            </button>
                            <button className='action'>
                                <FiLogIn />
                            </button>
                        </td> 
                    </tr>
                    <tr>
                        <td data-label='check'></td>
                        <td className='card-name' data-label='Name'>
                        <img width="30" src={homem1} alt="homem1" />
                        <div>
                        <h3>Miron Vitold</h3>
                        <p>miron.vitold@devias.io</p>
                        </div>
                        </td>
                        <td data-label='Location'>San Diego, California, USA</td>
                        <td data-label='Orders'>0</td>
                        <td data-label='Spent'>$0.00</td>   
                        <td>
                            <button className='action'>
                                <FiEdit />
                            </button>
                            <button className='action'>
                                <FiLogIn />
                            </button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users;

