import { useState } from "react";
import PaymentOverview from "../../Features/Dashboard/Payments/PaymentOverview";
import SearchPayment from "../../Features/Dashboard/Payments/SearchPayments";
import PaymentList from "../../Features/Dashboard/Payments/PaymentsList";
import Modal from "../../ui/Modal";
import PageMotion from "../../ui/PageMotion";
import PageHead from "../../ui/PageHead";

const Payments = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Payments" },
    { id: "tuition", label: "Tuition Fees" },
    { id: "faculty", label: "Faculty Dues" },
    { id: "department", label: "Departmental Fees" },
    { id: "hostel", label: "Hostel Fees" },
    { id: "others", label: "Other Payments" },
  ];

  return (
    <PageMotion>
      <PageHead
        title={"Payments"}
        subtitle={"Manage your school-related payments and fees"}
      />
      {/* Payment Overview Cards */}
      <PaymentOverview />
      {/* Search and Filter Section */}
      <SearchPayment
        setActiveCategory={setActiveCategory}
        categories={categories}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        activeCategory={activeCategory}
      />
      {/* Payments List */}
      <Modal>
        <PaymentList
          searchQuery={searchQuery}
          activeCategory={activeCategory}
        />{" "}
      </Modal>
      {/* Payment Modal */}
    </PageMotion>
  );
};

export default Payments;
