import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { confirmAlert } from "react-confirm-alert";
import debounce from "lodash/debounce";
import { useImmer } from "use-immer";
// import _ from "lodash";
import toast, { Toaster } from "react-hot-toast";

import {
  AddContact,
  EditContact,
  ViewContact,
  Contacts,
  Navbar,
  Products,
} from "./component";

// import { Products } from "./component/contacts/Products";
import "./App.css";

import {
  createContact,
  deleteContact,
  getAllContacts,
  getAllGroups,
} from "./services/contactService";
// import Products from './component/contacts/products';
import {
  CURRENTLINE,
  FOREGROUND,
  COMMENT,
  PURPLE,
  RED,
} from "./helpers/Colors";

const App = () => {
  const [loading, setLoading] = useState(false);
  // const [getContacts, setContacts] = useState([]);
  const [getContacts, setContacts] = useImmer([]);
  // const [getFilteredContacts, setFilteredContacts] = useState([]);
  const [getFilteredContacts, setFilteredContacts] = useImmer([]);
  const [getGroups, setGroups] = useState([]);
  const [query, setQuery] = useState({ text: "" });
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    moble: "",
    email: "",
    job: "",
    group: "",
  });

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: ContactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(ContactsData);
        setFilteredContacts(ContactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createContactForm = async (values) => {
    // event.preventDefault();
    try {
      setLoading((prelod) => !prelod);
      const { status, data } = await createContact(values);
      if (status === 201) {
        setLoading((prelod) => !prelod);
        // const allContact = [...getContacts, data];
        // setContacts(allContact);
        // setFilteredContacts(allContact);

        setContacts((draft) => {
          draft.push(data);
        });
        setFilteredContacts((draft) => {
          draft.push(data);
        });
        // setContact({});
        Navigate("/contacts");
        toast.success("با موفقیت ساخته شد");
      }
    } catch (err) {}
  };

  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };
  //  start  alert delet contact
  const confirm = (contactId, contactFullname, contactPhoto) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: RED }}>پاک کردن مخاطب</h1>
            <hr />
            <p style={{ color: FOREGROUND }}>
              مطمئنی که میخوای مخاطب{" "}
              <span style={{ color: RED }}>{contactFullname}</span> رو پاک کنی ؟
            </p>
            <img
              src={contactPhoto}
              alt=""
              style={{ border: `1px solid ${PURPLE}` }}
              className="img-fluid rounded"
            />
            <br />
            <hr />
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };
  // end alert delete contact

  //   start fanction delete contact
  const removeContact = async (contactId) => {
    const backupContacts = [...getContacts];
    try {
      setContacts((draft) => draft.filter((d) => d.id !== contactId));
      setFilteredContacts((draft) => draft.filter((d) => d.id !== contactId));

      setLoading(true);

      const { status } = await deleteContact(contactId);
      console.log(status);
      toast.error("با موفقیت حذف شد");
      if (status === 200) {
        setLoading(false);
      }
      if (status !== 200) {
        setContacts(backupContacts);
        setFilteredContacts(backupContacts);

        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setContacts(backupContacts);
      setFilteredContacts(backupContacts);
    }
  };
  //   end fanction delete contact//

  // start search contact function
  const contactSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allContacts = getContacts.filter((c) => {
      return c.fullname
        .toString()
        .toLowerCase()
        .includes(event.target.value.toString().toLowerCase());
    });
    setFilteredContacts(allContacts);
  };
  //end search contact function//

  return (
    <div className="App">
      <Navbar query={query} search={contactSearch} />
      <Toaster />
      <Routes>
        {/* <Route path="/" element={<Navbar/>} /> */}
        <Route
          path="/contacts"
          element={
            <Contacts
              contacts={getFilteredContacts}
              loading={loading}
              confirmDelete={confirm}
            />
          }
        />
        <Route
          path="/"
          element={
            <Products contacts={getFilteredContacts} loading={loading} />
          }
        />
        <Route
          path="/products"
          element={
            <Products contacts={getFilteredContacts} loading={loading} />
          }
        />
        <Route
          path="/contacts"
          element={
            <Contacts
              contacts={getFilteredContacts}
              loading={loading}
              confirmDelete={confirm}
            />
          }
        />
        <Route
          path="/Contacts/add"
          element={
            <AddContact
              loading={loading}
              contact={getContact}
              setContactInfo={setContactInfo}
              groups={getGroups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path="/Contacts/edit/:contactId" element={<EditContact />} />
        <Route path="/Contacts/:contactId" element={<ViewContact />} />
      </Routes>
    </div>
  );
};

export default App;
