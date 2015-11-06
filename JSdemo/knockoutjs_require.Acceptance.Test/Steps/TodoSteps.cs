namespace knockoutjs_require.Acceptance.Test.Steps
{
    using System;
    using System.Threading;
    using NUnit.Framework;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Support.UI;
    using TechTalk.SpecFlow;
    using Selenium_SpecFlow.Support;

    [Binding]
    public class TodoSteps : SeleniumStepsBase
    {
        [Given]
        public void Given_I_have_entered_P0_into_the_Todo_list(string value)
        {
            selenium.Navigate().GoToUrl("http://localhost:23656");
            AddTodo(value);

            Thread.Sleep(500);
            var wait = new WebDriverWait(selenium, TimeSpan.FromSeconds(3));
            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//label[text()='" + value + "']")));
        }

        [When]
        public void When_I_press_remove_P0(string value)
        {
            selenium.FindElement(By.XPath("//label[text()='" + value + "']")).FindElement(By.XPath("parent::*")).FindElement(By.CssSelector(".destroy")).Click();
        }

        [Then]
        public void Then_the_result_should_be_P0_removed_from_the_todo_list(string value)
        {
            Assert.Throws<NoSuchElementException>(() => selenium.FindElement(By.XPath("//label[text()='" + value + "']")));
        }

        private void AddTodo(string value)
        {
            var element = selenium.FindElement(By.Id("new-todo"));
            element.SendKeys(value);
            element.SendKeys(Keys.Enter);
        }
    }
}
