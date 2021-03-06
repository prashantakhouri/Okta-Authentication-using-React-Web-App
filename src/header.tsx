import { IStackProps, Stack, Link, Label } from "@fluentui/react";
import "./header.css";

const logout = async () => {
  //1.clear the token to get teo login;
  const token = localStorage.getItem("okta-token-storage");
  if (token != null) {
    localStorage.removeItem("okta-token-storage");
  }
  //2. redirect to loginpage
  window.location.href = "/login";
};

const horizontalStackProps: IStackProps = {
  horizontal: true,
  styles: { root: { overflow: "hidden", width: "100%" } },
};

const horizontalStackLabelProps: IStackProps = {
  horizontal: true,
  horizontalAlign: "start",
  tokens: { childrenGap: 50 },
  styles: { root: { overflow: "hidden", width: "100%" } },
};

const horizontalStackProfileProps: IStackProps = {
  horizontal: true,
  horizontalAlign: "end",
  tokens: { childrenGap: 20 },
  styles: { root: { overflow: "hidden", width: "90%", marginRight: "40px" } },
};

const horizontalStackSignoutProps: IStackProps = {
  styles: { root: { overflow: "hidden", fontSize: "14px", marginTop: "4px" } },
};

export const Header = () => {
  const token = localStorage.getItem("okta-token-storage");

  const idToken = JSON.parse(token!);
  const currentUserName = idToken.idToken.claims.name;
  const currentUserEmail = idToken.idToken.claims.email;

  return (
    <header>
      <Stack {...horizontalStackProps} className="header">
        <Stack {...horizontalStackLabelProps}>
          <Stack {...horizontalStackProfileProps}>
            <Label className="lnkHomeLabel" title={currentUserEmail}>
              {currentUserName}
            </Label>
            <Stack {...horizontalStackSignoutProps}>
              <Link
                id="btn_Signout"
                className="lnkHomeSignout"
                onClick={logout}
              >
                Signout
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </header>
  );
};

// export default Header;
