const MAIN_ROUTE = '/store'
const PERSONAL_ACCOUNT_ROUTE = '/personal-account'

export const storeRoutes = {
  main: `${MAIN_ROUTE}`,
  order: `${MAIN_ROUTE}/order`,
  event: `${MAIN_ROUTE}/event`,
  personalAccount: {
    main: `${MAIN_ROUTE}${PERSONAL_ACCOUNT_ROUTE}`,
    myTickets: `${MAIN_ROUTE}${PERSONAL_ACCOUNT_ROUTE}/tickets`,
    myFavorites: `${MAIN_ROUTE}${PERSONAL_ACCOUNT_ROUTE}/favorites`,
    myData: `${MAIN_ROUTE}${PERSONAL_ACCOUNT_ROUTE}/data`,
    myReviews: `${MAIN_ROUTE}${PERSONAL_ACCOUNT_ROUTE}/reviews`
  }
}