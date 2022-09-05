// 질의 함수를 매개변수로 바꾸기
// 전역변수나, 외부 모듈을 접근하는 경우 좋지 않다.
targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  // ...
}
