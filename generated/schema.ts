// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Dao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dao entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dao must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dao", id.toString(), this);
    }
  }

  static load(id: string): Dao | null {
    return changetype<Dao | null>(store.get("Dao", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get yeeters(): Array<string> | null {
    let value = this.get("yeeters");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set yeeters(value: Array<string> | null) {
    if (!value) {
      this.unset("yeeters");
    } else {
      this.set("yeeters", Value.fromStringArray(<Array<string>>value));
    }
  }

  get yeets(): Array<string> | null {
    let value = this.get("yeets");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set yeets(value: Array<string> | null) {
    if (!value) {
      this.unset("yeets");
    } else {
      this.set("yeets", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Yeeter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Yeeter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Yeeter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Yeeter", id.toString(), this);
    }
  }

  static load(id: string): Yeeter | null {
    return changetype<Yeeter | null>(store.get("Yeeter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get startTime(): BigInt | null {
    let value = this.get("startTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt | null) {
    if (!value) {
      this.unset("startTime");
    } else {
      this.set("startTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (!value) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get isShares(): boolean {
    let value = this.get("isShares");
    return value!.toBoolean();
  }

  set isShares(value: boolean) {
    this.set("isShares", Value.fromBoolean(value));
  }

  get multiplier(): BigInt | null {
    let value = this.get("multiplier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set multiplier(value: BigInt | null) {
    if (!value) {
      this.unset("multiplier");
    } else {
      this.set("multiplier", Value.fromBigInt(<BigInt>value));
    }
  }

  get minTribute(): BigInt | null {
    let value = this.get("minTribute");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set minTribute(value: BigInt | null) {
    if (!value) {
      this.unset("minTribute");
    } else {
      this.set("minTribute", Value.fromBigInt(<BigInt>value));
    }
  }

  get goal(): BigInt | null {
    let value = this.get("goal");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set goal(value: BigInt | null) {
    if (!value) {
      this.unset("goal");
    } else {
      this.set("goal", Value.fromBigInt(<BigInt>value));
    }
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get vault(): Bytes | null {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes | null) {
    if (!value) {
      this.unset("vault");
    } else {
      this.set("vault", Value.fromBytes(<Bytes>value));
    }
  }

  get yeetCount(): BigInt {
    let value = this.get("yeetCount");
    return value!.toBigInt();
  }

  set yeetCount(value: BigInt) {
    this.set("yeetCount", Value.fromBigInt(value));
  }

  get yeets(): Array<string> | null {
    let value = this.get("yeets");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set yeets(value: Array<string> | null) {
    if (!value) {
      this.unset("yeets");
    } else {
      this.set("yeets", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Yeet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Yeet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Yeet must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Yeet", id.toString(), this);
    }
  }

  static load(id: string): Yeet | null {
    return changetype<Yeet | null>(store.get("Yeet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get yeeter(): string {
    let value = this.get("yeeter");
    return value!.toString();
  }

  set yeeter(value: string) {
    this.set("yeeter", Value.fromString(value));
  }

  get contributor(): Bytes {
    let value = this.get("contributor");
    return value!.toBytes();
  }

  set contributor(value: Bytes) {
    this.set("contributor", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value!.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get message(): string | null {
    let value = this.get("message");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set message(value: string | null) {
    if (!value) {
      this.unset("message");
    } else {
      this.set("message", Value.fromString(<string>value));
    }
  }
}
