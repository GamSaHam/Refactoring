// 슈퍼클래스 위임으로 바꾸기

// 리파지토리 패턴
class Scroll {
  constructor(id, dataLastCleaned, catelogItem) {
    this._id = id;
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this.id;
  }

  get title() {
    return this._catalogItem.title;
  }

  hasTag(aString) {
    return this._catalogItem.tags.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

const scrolls = aDocument.map(
    (record) =>
        new Scroll(
            record.id,
            LocalDate.parse(record.lastCleaned),
            record.catalogData.id,
            catalog
        )
);
