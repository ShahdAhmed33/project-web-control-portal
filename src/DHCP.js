import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import style from './DHCP.module.css'; // Import custom CSS file

const DHCP = () => {
    return (
        <div>
        <div className={style.parentContainer}>
            <div className={style.container}>
                <button className={`btn btn-info btn-lg dropdown-toggle ${style.customButton}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Options
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">option1</button></li>
                    <li><button className="dropdown-item" type="button">option2</button></li>
                    <li><button className="dropdown-item" type="button">option3</button></li>
                </ul>
                <h3 className={style.text}>Scopes Reservation</h3>
                <button className={`btn btn-secondary btn-lg ${style.customButton1} ms-0`} type="button">
                    Reset
                </button>
            </div>
            <div>
            <div className={style.container1}>
                        <div>
                            <label className={style.text}>Default Leases Time</label>
                        </div>
                        <div>
                            <input type="number" className={`form-control ${style.customInput}`} />
                        </div>
                    </div>
                    <div className={style.container1}>
                        <div>
                            <label className={style.text}>Maximum Lease Time</label>
                        </div>
                        <div>
                            <input type="number" className={`form-control ${style.customInput}`} />
                        </div>
                    </div>
                </div>
               
        </div>
        <div className="row mt-4">
            <div className="col-6">
                 <button className="btn btn-success btn-lg" type="button">
                   Save Info
                 </button>
            </div>
             <div className="col-6 ">
                   <button className="btn btn-warning btn-lg me-4" type="button">
                         Start Over
                   </button>
             </div>
        </div>

        </div>
    );
}

export default DHCP;