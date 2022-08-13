import { CURRENTLINE, GREEN } from "../../helpers/Colors";
import Spinner from "./../Spinner";
import { ORANGE } from "./../../helpers/Colors";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import AddContact from "./AddContact";
// import SingleProduct from "./SingleProduct";
// import AddContact from './AddContact';
// import { SingleProduct,AddContact } from "./component";
import EditContact from './EditContact';

const Products = ({ contacts, loading }) => {
  return (
    <>
   
 {/* note start add contact */}
      {/* <section className="container">
            <div className="grid">
              <div className="row  d-flex flex-column ">
                <div className="col-4">
                  <p className="h3">
                    <Link
                      to={"/contacts/add"}
                      className="btn mx-2"
                      style={{ backgroundColor: GREEN }}
                    >
                      ساخت مخاطب جدید 
                      <i className="fa fa-plus-circle mx-2" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>  */}
        {/* note end add contact div   */}
        {loading ? (
            <Spinner />
          ) : (
            <section className="container-fluid">
              <div className="row m-1">
                {contacts.length > 0 ? (
                  contacts.map((c) => (
                    <SingleProduct
                      key={c.id}
                      contact={c}
                    //   confirmDelete={() => confirmDelete(c.id, c.fullname,c.photo)}
                    />
                  ))
                ) : (
                  <div
                    className="text-center py-5"
                    style={{ backgroundColor: CURRENTLINE }}
                  >
                    <p className="h3" style={{ color: ORANGE }}>
                      مخاطب یافت نشد ...
                    </p>
                    <img
                      src={require("../../assets/no-found.gif")}
                      alt="پیدا نشد"
                      className="w-25"
                    />
                  </div>
                )}
              </div>
            </section>
          )} 

          {/* 2222222222222 */}
       {/* <section className="container-fluid">
        <div className="row m-4 d-flex justify-content-center align-items-center flex-grow-1 flex-xxl-shrink-1">
          <div className="col-2 col-lg-4 m-2 d-flex justify-content-center align-content-center align-items-center bg-danger">
            
                <EditContact/>
          </div>
          <div className="col-7 col-lg-6 m-2 d-flex justify-content-center align-items-center">
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <SingleProduct
                  key={c.id}
                  contact={c}
                  //   confirmDelete={() => confirmDelete(c.id, c.fullname,c.photo)}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="پیدا نشد"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </div>
      </section>  */}
    </>
  );
};

export default Products;
