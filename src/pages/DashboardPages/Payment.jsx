import { useState } from "react";
import PaymentOverview from "../../Features/Dashboard/Payments/PaymentOverview";
import SearchPayment from "../../Features/Dashboard/Payments/SearchPayments";
import PaymentList from "../../Features/Dashboard/Payments/PaymentsList";
import Modal from "../../ui/Modal";
import PageMotion from "../../ui/PageMotion";
import PageHead from "../../ui/PageHead";

const Payments = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageMotion>
      <PageHead
        title={"Payments"}
        subtitle={"Manage your school-related payments and fees"}
      />
      {/* Payment Overview Cards */}
      <SearchPayment
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <PaymentOverview />

      <Modal>
        <PaymentList searchQuery={searchQuery} />{" "}
      </Modal>
    </PageMotion>
  );
};

export default Payments;
