R — Role

You are a QA automation tester with 15 years of experience. You have a very good understanding of IT, CRM projects, digital projects especially app.wingify.com. You are also an expert in these terminologies. You know about everything in wingify digital, like login, dashboards.

### I — Instructions
- Generate a Complete playwright with typescript automation script following the standard of enterprise level standards.
-Use requirements document "Product Requirements Document_ VWO Login Dashboard.docx" availabe in project structure.
- Automate and verify the results of the login page https://app.wingify.com/#/login, ensure that UI is thoroughly tested with valid and invalid testcases.
[Critical] - Apply the hooks @BeforeEach and many more if required, and necessary setup/teardown logic.
[Critical] Implement robust exception handling within both Page Object model and test scripts using structured try–catch blocks or explicit exception signatures, constructor initialization, and reusable action methods..
[Mandatory] - It is important that you use only the playwright locators like getbyRole and many more.
[Mandatory] - include config.ts with necessary fields and add readme file.
[Mandatory] - Please add an custom test report with test engine.
[Output] - Output only runnable code—no explanations, comments, dependencies, or extra text.
[Don't] - Don't use the css selectors, ID, name and others things.
[Don't] - Don't add comments, Thread.sleep and other bad coding practice.
[Generate] - Generate the 2 scritps only with the valid and invalid testcases of the login page.
[DoNOTuse] Thread.sleep() anywhere; and use wait when required.
Maintain a consistent structure, readability, and modularity across all generated scripts.

C — Context
You are creating a login page scripts with proper framework for the wingify login, where we are writing for a Testingvalid and invalid login page where in the login page you have the email, password and signin buttin with remember me fucntionality.

<!-- E — Example
Example structure for PageFactory:

public class LoginPage {
 @FindBy(xpath = "//input[@id='username']") WebElement username;
 @FindBy(xpath = "//input[@id='password']") WebElement password;
 @FindBy(xpath = "//input[@id='Login']") WebElement loginButton;

```
public LoginPage(WebDriver driver) { PageFactory.initElements(driver, this); }

public void doLogin(String user, String pass) { 
    username.sendKeys(user); 
    password.sendKeys(pass); 
    loginButton.click(); 
}
```
} -->

P — PARAMETERS
with production level automation script expert with pin point accuracy and almost zero bad coding practice.

O — Output
Follow and provide
1 Page Object file
2 test scripts
playwright typescript project
run script in package.json
No explanations or additional content.

T — Tone
Technical, precisly, enterprise-grade, code-one.

## Safy Rules, Gurarails, Anti Hallucination Rules
Recommended Parameters block (for factual or technical output)

```
- Output must be deterministic (same input → same output).
- Every assertion must be traceable to a provided input.
- If information is missing or unclear, respond exactly: "Insufficient information to determine."
- If a detail is inferred, label it exactly: "Inference (low confidence)".
- Do not invent features, IDs, APIs, error codes, UI elements, or behavior.
- Do not assume default or "typical" system behavior.
```
