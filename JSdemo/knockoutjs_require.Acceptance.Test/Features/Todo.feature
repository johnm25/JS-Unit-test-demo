Feature: Todo
	In order maintain the todo list
	As a editor
	I want to be able to add item and remove item

@web
Scenario: Todo list maintanance
	Given I have entered "Julefrokost fredag into the Todo list
	And I have entered "Golf imorgen into the Todo list
	And I have entered "Afdelingsmøde idag into the Todo list
	When I press remove "Golf imorgen
	Then the result should be "Golf imorgen removed from the todo list
