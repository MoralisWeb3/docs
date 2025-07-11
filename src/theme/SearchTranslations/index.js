import { translate } from '@docusaurus/Translate';

export default {
  button: {
    buttonText: translate({
      id: 'theme.SearchBar.label',
      message: 'Search',
      description: 'The ARIA label and placeholder for search button'
    }),
    buttonAriaLabel: translate({
      id: 'theme.SearchBar.label',
      message: 'Search',
      description: 'The ARIA label and placeholder for search button'
    })
  },
  placeholder: translate({
    id: 'theme.SearchBar.label',
    message: 'Search',
    description: 'The placeholder for search'
  }),
  modal: {
    searchBox: {
      resetButtonTitle: translate({
        id: 'theme.SearchModal.resetButtonTitle',
        message: 'Clear the query',
        description: 'The label and ARIA label for search box reset button'
      }),
      resetButtonAriaLabel: translate({
        id: 'theme.SearchModal.resetButtonTitle',
        message: 'Clear the query',
        description: 'The label and ARIA label for search box reset button'
      }),
      cancelButtonText: translate({
        id: 'theme.SearchModal.cancelButtonText',
        message: 'Cancel',
        description: 'The label and ARIA label for search box cancel button'
      }),
      cancelButtonAriaLabel: translate({
        id: 'theme.SearchModal.cancelButtonText',
        message: 'Cancel',
        description: 'The label and ARIA label for search box cancel button'
      })
    },
    startScreen: {
      recentSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.recentSearchesTitle',
        message: 'Recent',
        description: 'The title for recent searches'
      }),
      noRecentSearchesText: translate({
        id: 'theme.SearchModal.startScreen.noRecentSearchesText',
        message: 'No recent searches',
        description: 'The text when no recent searches'
      }),
      saveRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.saveRecentSearchButtonTitle',
        message: 'Save this search',
        description: 'The label for save recent search button'
      }),
      removeRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeRecentSearchButtonTitle',
        message: 'Remove this search from history',
        description: 'The label for remove recent search button'
      }),
      favoriteSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.favoriteSearchesTitle',
        message: 'Favorite',
        description: 'The title for favorite searches'
      }),
      removeFavoriteSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle',
        message: 'Remove this search from favorites',
        description: 'The label for remove favorite search button'
      })
    },
    errorScreen: {
      titleText: translate({
        id: 'theme.SearchModal.errorScreen.titleText',
        message: 'Unable to fetch results',
        description: 'The title for error screen of search modal'
      }),
      helpText: translate({
        id: 'theme.SearchModal.errorScreen.helpText',
        message: 'You might want to check your network connection.',
        description: 'The help text for error screen of search modal'
      })
    },
    footer: {
      selectText: translate({
        id: 'theme.SearchModal.footer.selectText',
        message: 'to select',
        description: 'The explanatory text for "to select"'
      }),
      selectKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.selectKeyAriaLabel',
        message: 'Enter key',
        description: 'The ARIA label for the Enter key button that makes the selection'
      }),
      navigateText: translate({
        id: 'theme.SearchModal.footer.navigateText',
        message: 'to navigate',
        description: 'The explanatory text for "to navigate"'
      }),
      navigateUpKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateUpKeyAriaLabel',
        message: 'Arrow up',
        description: 'The ARIA label for the Arrow up key button that makes the navigation'
      }),
      navigateDownKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateDownKeyAriaLabel',
        message: 'Arrow down',
        description: 'The ARIA label for the Arrow down key button that makes the navigation'
      }),
      closeText: translate({
        id: 'theme.SearchModal.footer.closeText',
        message: 'to close',
        description: 'The explanatory text for "to close"'
      }),
      closeKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.closeKeyAriaLabel',
        message: 'Escape key',
        description: 'The ARIA label for the Escape key button that closes the modal'
      }),
      searchByText: translate({
        id: 'theme.SearchModal.footer.searchByText',
        message: 'Search by',
        description: 'The explanatory text for "Search by"'
      })
    },
    noResultsScreen: {
      noResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.noResultsText',
        message: 'No results for',
        description: 'The text for no results screen of search modal'
      }),
      suggestedQueryText: translate({
        id: 'theme.SearchModal.noResultsScreen.suggestedQueryText',
        message: 'Try searching for',
        description: 'The text for suggested query when no results found in search modal'
      }),
      reportMissingResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsText',
        message: 'Believe this query should return results?',
        description: 'The text for reporting missing results'
      }),
      reportMissingResultsLinkText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsLinkText',
        message: 'Let us know.',
        description: 'The text for the link to report missing results'
      })
    }
  }
};