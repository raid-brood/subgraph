// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OnReceived extends ethereum.Event {
  get params(): OnReceived__Params {
    return new OnReceived__Params(this);
  }
}

export class OnReceived__Params {
  _event: OnReceived;

  constructor(event: OnReceived) {
    this._event = event;
  }

  get contributorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get baal(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get vault(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get message(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class YeeterShaman extends ethereum.SmartContract {
  static bind(address: Address): YeeterShaman {
    return new YeeterShaman("YeeterShaman", address);
  }

  PERC_POINTS(): BigInt {
    let result = super.call("PERC_POINTS", "PERC_POINTS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PERC_POINTS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PERC_POINTS", "PERC_POINTS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baal(): Address {
    let result = super.call("baal", "baal():(address)", []);

    return result[0].toAddress();
  }

  try_baal(): ethereum.CallResult<Address> {
    let result = super.tryCall("baal", "baal():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balance(): BigInt {
    let result = super.call("balance", "balance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  endTime(): BigInt {
    let result = super.call("endTime", "endTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTime", "endTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeAmounts(param0: BigInt): BigInt {
    let result = super.call("feeAmounts", "feeAmounts(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_feeAmounts(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeAmounts", "feeAmounts(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeRecipients(param0: BigInt): Address {
    let result = super.call(
      "feeRecipients",
      "feeRecipients(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_feeRecipients(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "feeRecipients",
      "feeRecipients(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  goal(): BigInt {
    let result = super.call("goal", "goal():(uint256)", []);

    return result[0].toBigInt();
  }

  try_goal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("goal", "goal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  goalAchieved(): boolean {
    let result = super.call("goalAchieved", "goalAchieved():(bool)", []);

    return result[0].toBoolean();
  }

  try_goalAchieved(): ethereum.CallResult<boolean> {
    let result = super.tryCall("goalAchieved", "goalAchieved():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isShares(): boolean {
    let result = super.call("isShares", "isShares():(bool)", []);

    return result[0].toBoolean();
  }

  try_isShares(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isShares", "isShares():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minTribute(): BigInt {
    let result = super.call("minTribute", "minTribute():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minTribute(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minTribute", "minTribute():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  multiplier(): BigInt {
    let result = super.call("multiplier", "multiplier():(uint256)", []);

    return result[0].toBigInt();
  }

  try_multiplier(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("multiplier", "multiplier():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  startTime(): BigInt {
    let result = super.call("startTime", "startTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startTime", "startTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vault(): Address {
    let result = super.call("vault", "vault():(address)", []);

    return result[0].toAddress();
  }

  try_vault(): ethereum.CallResult<Address> {
    let result = super.tryCall("vault", "vault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ContributeEthCall extends ethereum.Call {
  get inputs(): ContributeEthCall__Inputs {
    return new ContributeEthCall__Inputs(this);
  }

  get outputs(): ContributeEthCall__Outputs {
    return new ContributeEthCall__Outputs(this);
  }
}

export class ContributeEthCall__Inputs {
  _call: ContributeEthCall;

  constructor(call: ContributeEthCall) {
    this._call = call;
  }

  get message(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ContributeEthCall__Outputs {
  _call: ContributeEthCall;

  constructor(call: ContributeEthCall) {
    this._call = call;
  }
}

export class SetupCall extends ethereum.Call {
  get inputs(): SetupCall__Inputs {
    return new SetupCall__Inputs(this);
  }

  get outputs(): SetupCall__Outputs {
    return new SetupCall__Outputs(this);
  }
}

export class SetupCall__Inputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _initParams(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetupCall__Outputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }
}
