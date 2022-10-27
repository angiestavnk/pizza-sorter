import PizzaProvider from './components/PizzaProvider';
import PizzaIngredients from './components/PizzaIngredients';
import Pizza from './components/Pizza';
import PizzaSortingDropdown from './components/PizzaSortingDropdown';
import { default as Picasso } from '@toptal/picasso-provider'
import { Container, Page, Typography } from '@toptal/picasso'
import PageFooter from '@toptal/picasso/PageFooter/PageFooter';
import { PizzaLogo } from './assets/pizzaLogo';

function App() {
  return (
    <Picasso>
      <PizzaProvider>
        <Page>
          <Page.TopBar title='Pizza Sorter' logo={<PizzaLogo />}/>
          <Page.Content>
            <Container flex direction='column' alignItems='center' bottom='large' top='large'>
              <Typography variant='heading' size='xlarge' style={{ fontSize: "50px" }}>
                Select your Pizza
              </Typography>
                <PizzaSortingDropdown />
                <Pizza />
                <PizzaIngredients />
            </Container>
          </Page.Content>
          <PageFooter/>
        </Page>
      </PizzaProvider>
    </Picasso>
  );
}

export default App;