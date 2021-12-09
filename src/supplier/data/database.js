import Moralis from "moralis";

defineNewObject = async () => {
  const Tender = Moralis.Object.extend("TenderDetails");
  const tenderDetails = new Tender();
  tenderDetails.set("title", "SUPPLIER PREQUALIFICATION NOTICE 2021-2023");
  tenderDetails.set("client", "JUBILEE ALLIANZ GENERAL INSURANCE (K) LIMITED");
  tenderDetails.set("Deadline", "14th October, 2021 – 2200 HRS (EAT)");

  await tenderDetails.save();
};
