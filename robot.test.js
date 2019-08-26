const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let bot = newRobot(true, true, false);  // Repairs, Foreign, Not Vintage.

  // act
  let result = station(bot);

  // assert
  expect(result).toEqual(1);
});


test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let bot = newRobot(true, false, true);  // Repairs, Not Foreign, Vintage.

  // act
  let result = station(bot);

  // assert
  expect(result).toEqual(2);
});


test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let bot = newRobot(true, false, false);  // Repairs, Not Foreign, Not Vintage.

  // act
  let result = station(bot);

  // assert
  expect(result).toEqual(3);
});


test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let bot = newRobot(false, false, false);  // No Repairs, Not Foreign, Not Vintage.

  // act
  let result = station(bot);

  // assert
  expect(result).toEqual(4);
});


test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let bot = newRobot(false, false, false);  // No Repairs, Not Foreign, Not Vintage.

  // act
  let result = prioritizeTasks(bot);

  // assert
  expect(result).toEqual(-1);
});


test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  let bot = newRobot(false, false, false);  // No Repairs, Not Foreign, Not Vintage.
  bot.todos.push(7, 42, 8, 5, -99);

  // act
  let result = prioritizeTasks(bot);

  // assert
  expect(result).toEqual(42);
});


test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let bot = newRobot(false, false, false);  // No Repairs, Not Foreign, Not Vintage.
  bot.dayOff = 'Sunday';

  // act
  let result = isWorkday(bot, 'Sunday');

  // assert
  expect(result).toEqual(false);
});


test('test_workday_not_day_off_returns_true', () => {
  // arrange
  let bot = newRobot(false, false, false);  // No Repairs, Not Foreign, Not Vintage.
  bot.dayOff = 'Sunday';

  // act
  let result = isWorkday(bot, 'Monday');

  // assert
  expect(result).toEqual(true);
});
