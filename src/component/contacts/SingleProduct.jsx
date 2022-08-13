import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/Colors";
import {  useNavigate } from "react-router-dom";
import { FOREGROUND } from './../../helpers/Colors';

const SingleProduct = ({ contact }) => {

  const navigate = useNavigate();
  const gotonav = () => {
    navigate(`/contacts/${contact.id}`);
    console.log("goto single contact");
  };

  return (
    <div className="col-md-3 m-0 p-0">
      <div style={{ backgroundColor: FOREGROUND }} className="card my-2 ">
        <div className="card-body" >
          <div className="row align-items-center  justify-content-end flex-column">
            <div className="col-md-12 col-sm-6 m-0 p-1" >
              <img
                src={contact.photo}
                alt=""
                style={{ border: `1px solid ${PURPLE}`,cursor:'pointer' }}
                className="img-fluid rounded "
                onClick={gotonav}
              />
            </div>
            <div className="col-md-12 col-sm-6 p-0 m-0">
              <ul className="list-group m-0 p-1" style={{ cursor:'pointer' }} onClick={gotonav}>
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">
                    {contact.fullname}
                  </span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact.mobile}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              {/* <Link
                to={`/contacts/${contact.id}`}
                className="btn my-1 p-4 flex-fill"
                style={{ backgroundColor: ORANGE }}
              >
                <i className="fa fa-eye" />
              </Link> */}

              {/* <Link
                to={`/contacts/edit/${contact.id}`}
                className="btn my-1"
                style={{ backgroundColor: PURPLE }}
              >
                <i class="fa fa-edit"></i>
              </Link>
              <button
                onClick={confirmDelete}
                className="btn my-1"
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
