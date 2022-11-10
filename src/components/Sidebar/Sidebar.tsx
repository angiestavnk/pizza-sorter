import { Page, PortfolioDesigner16, Profile16 } from "@toptal/picasso"
import { ADD_PIZZA, HOME, PIZZAS } from "../../router/config/routes"
import { StyledLink } from "./style"

const Sidebar = () => (
  <Page.Sidebar>
    <Page.Sidebar.Menu>
      <Page.Sidebar.Item icon={<PortfolioDesigner16 />}>
        <StyledLink to={HOME}>Home</StyledLink>
      </Page.Sidebar.Item>
      <Page.Sidebar.Item icon={<Profile16 />}>
        <StyledLink to={PIZZAS}>Pizzas</StyledLink>
      </Page.Sidebar.Item>
      <Page.Sidebar.Item icon={<Profile16 />}>
        <StyledLink to={ADD_PIZZA}>Add new pizza</StyledLink>
      </Page.Sidebar.Item>
    </Page.Sidebar.Menu>
  </Page.Sidebar>
)

export default Sidebar
