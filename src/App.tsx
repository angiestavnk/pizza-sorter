import PizzaProvider from './components/PizzaProvider'
import Picasso from '@toptal/picasso-provider'
import { Container, Page } from '@toptal/picasso'
import PageFooter from '@toptal/picasso/PageFooter/PageFooter'
import { PizzaLogo } from './assets/pizzaLogo'
import Sidebar from './components/Sidebar'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <Picasso>
      <PizzaProvider>
        <Page>
          <Page.TopBar title='Pizza Sorter' logo={<PizzaLogo />} />
          <Page.Content>
            <Sidebar />
            <Container
              flex
              direction='column'
              alignItems='center'
              bottom='large'
              top='large'
              left='large'
            >
              <AppRouter />
            </Container>
          </Page.Content>
          <PageFooter />
        </Page>
      </PizzaProvider>
    </Picasso>
  );
}

export default App
