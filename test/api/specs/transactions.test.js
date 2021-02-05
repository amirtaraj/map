const { request, expect } = require("../../../api.config");

describe("GET /api/transaction", function () {
  this.timeout(5000);
  it("returns all Bank accounts - GET", async function () {
    const response = await request.get("/api/transaction");
    expect(response.status).to.eql(200); 
  });
});

describe("POST /api/transaction", function () {
  this.timeout(5000);
  it("Make Deposit - POST", async function () {
    const response = await request
      .post("/api/transaction")
      .send({"transactionType":"Deposit","amount":55,"accountId":1});
    expect(response.status).to.eql(200);
    expect(response.body.amount).to.eql(55);

  });
});

describe("POST /api/transaction", function () {
  this.timeout(5000);
  it("Take Withdrawal - POST", async function () {
    const response = await request
      .post("/api/transaction")
      .send({"transactionType":"Withdrawal","amount":77,"accountId":1});
    expect(response.status).to.eql(200);
  });
});
