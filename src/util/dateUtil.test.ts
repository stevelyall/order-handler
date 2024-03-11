import { addThreeDaysToDate } from "./dateUtil";

describe('dateUtil', () => {

  describe('addThreeDaysToDate', () => {

    it('should add three days to a date', () => {
      const date = new Date('2021-01-31');
      const newDate = addThreeDaysToDate(date);
      expect(newDate.toISOString()).toBe(new Date('2021-02-03').toISOString());
    });

   });

});
