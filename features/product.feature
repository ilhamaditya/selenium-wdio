Feature: Product

@Regression
    Scenario: Access a Product via category after applying multiple filters
        Given go to ebay
        When navigate to search by category - electronics - cell phones & accessories
        And page loads and click cell phones & smartphones
        And click more refinements
        And add more 3 filters
        Then filter tags applied
@Test @Regression
    Scenario: Access a Product via Search
        Given go to ebay
        When input keyword on search bar
        And change category
        Then redirect to result search page
        And check first result name matches refer keyword