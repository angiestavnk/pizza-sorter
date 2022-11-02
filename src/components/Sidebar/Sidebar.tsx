import { Page, PortfolioDesigner16, Profile16 } from "@toptal/picasso"
import { StyledLink } from "./style"

const Sidebar = () => (
  <Page.Sidebar>
    <Page.Sidebar.Menu>
      <Page.Sidebar.Item icon={<PortfolioDesigner16 />}>
        <StyledLink to='/'>Home</StyledLink>
      </Page.Sidebar.Item>
      <Page.Sidebar.Item icon={<Profile16 />}>
        <StyledLink to='/pizzas'>Pizzas</StyledLink>
      </Page.Sidebar.Item>
    </Page.Sidebar.Menu>
  </Page.Sidebar>
)

export default Sidebar
