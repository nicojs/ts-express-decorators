import {Injectable} from "../../../../packages/di/src/decorators/injectable";
import * as ProviderRegistry from "../../../../packages/di/src/registries/ProviderRegistry";
import {Sinon} from "../../../tools";

describe("@Injectable()", () => {
  const sandbox = Sinon.createSandbox();

  class Test {}

  before(() => {
    sandbox.stub(ProviderRegistry, "registerProvider");

    Injectable({options: "options"})(Test);
  });

  after(() => {
    sandbox.restore();
  });

  it("should called registerProvider", () => {
    ProviderRegistry.registerProvider.should.have.been.calledWithExactly({
      options: "options",
      provide: Test
    });
  });
});
