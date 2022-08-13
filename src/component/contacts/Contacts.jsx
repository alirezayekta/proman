import Contact from "./Contact";
import Spinner from "../Spinner";
import { CURRENTLINE, GREEN, ORANGE, PINK } from "../../helpers/Colors";
// import NotFound from "../../assets/no-found.gif";
import { Link } from "react-router-dom";

const Contacts = ({ contacts, loading, confirmDelete }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
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
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <Contact
                  key={c.id}
                  contact={c}
                  confirmDelete={() => confirmDelete(c.id, c.fullname,c.photo)}
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
    </>
  );
};

export default Contacts;
