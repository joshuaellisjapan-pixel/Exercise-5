# Equipment Request Priority Filter

## Goal

Help managers quickly find equipment requests at the priority level that needs their attention.

## User Need

Managers need to narrow the equipment request list to a single priority, then return to the full list whenever they want.

## Functional Rules

- The equipment request list has a **Priority** dropdown with **All**, **High**, **Medium**, and **Low**, in that order. High is the most urgent priority, followed by Medium and Low.
- Selecting **High**, **Medium**, or **Low** displays only requests with that existing priority. The visible requests keep their original relative order.
- Priority matching is case-insensitive. For example, **high**, **HIGH**, and **High** all match **High**.
- Selecting **All** displays every request in its original order, including requests with missing or unknown priorities.
- If the selected view has no requests, display the exact message “No requests found.”
- Opening, reopening, or refreshing the application sets the dropdown to **All**.

## Constraints

- Filtering uses the priority information already on each request.
- Filtering works without a login or database.
- Filtering only changes which requests are visible. It preserves every existing request and all of its field values.

## Acceptance Criteria

| Given | When | Then |
| --- | --- | --- |
| The app has 10 existing requests, 3 of which are High | A manager opens the app | The **Priority** dropdown shows **All** as selected, offers **All**, **High**, **Medium**, and **Low** in that order, and all 10 requests appear in their original order. |
| The same 10 requests are displayed | A manager selects **High** | Exactly the 3 High requests appear in their original relative order. |
| The list contains requests with priorities `high`, `HIGH`, `High`, and `Low` | A manager selects **High** | Exactly the requests with priorities `high`, `HIGH`, and `High` appear in their original relative order. |
| The list contains multiple Medium and Low requests interspersed with other priorities | A manager selects **Medium**, then selects **Low** | The Medium view shows exactly the Medium requests in their original relative order. The Low view shows exactly the Low requests in their original relative order. |
| The 10-request list includes a request with no priority and a request with an unknown priority | A manager selects each specific priority in turn, then selects **All** | Both requests are absent from each specific-priority view. Selecting **All** restores all 10 requests in their original order. |
| The list contains requests, but none are Low | A manager selects **Low** | No request rows appear, and the list displays “No requests found.” |
| The app has zero requests | A manager opens the app | **All** is selected and the list displays “No requests found.” |
| The app has existing requests and a specific priority is selected | A manager refreshes the app, then selects a specific priority again and closes and reopens the app | After each action that reloads the app, **All** is selected and the full list appears in its original order. |
| The app has existing requests and runs without a login or database | A manager cycles through all four options and returns to **All** | Each selection works without a sign-in prompt. The final list has the same requests in the same order, with every field value matching the original records. |

## Out of Scope

- Sorting or reordering requests by priority.
- Adding, editing, or deleting requests through the filter, or changing how priorities are assigned.
- Saving the selected filter across refreshes or app launches.
