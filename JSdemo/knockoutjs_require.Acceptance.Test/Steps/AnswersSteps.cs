using System;
using TechTalk.SpecFlow;

namespace knockoutjs_require.Acceptance.Test.Steps
{
    using System.Collections.Generic;

    using NUnit.Framework;

    [Binding]
    public class AnswersSteps
    {
        private List<int> numbers;

        [BeforeScenario("AddNubmers")]
        public void Before()
        {
            numbers = new List<int>();
        }

        [Given]
        public void Given_I_have_entered_P0_into_the_calculator(int value)
        {
            numbers.Add(value);
        }

        [When]
        public void When_I_press_add()
        {
            int total=0;
            numbers.ForEach(x => total = x + total);

            ScenarioContext.Current.Add("Total", total);
        }

        [Then]
        public void Then_the_result_should_be_P0_on_the_screen(int expectedTotal)
        {
            Assert.AreEqual(expectedTotal, ScenarioContext.Current.Get<int>("Total"));
        }
    }
}
