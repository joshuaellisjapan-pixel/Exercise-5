"use strict";

const storageKey = "exercise-5.equipment-requests";
const priorities = ["High", "Medium", "Low"];
const form = document.querySelector("#request-form");
const equipment = document.querySelector("#equipment");
const priority = document.querySelector("#priority");
const statusMessage = document.querySelector("#form-status");
const requestList = document.querySelector("#requests");
const emptyState = document.querySelector("#empty-state");

function loadRequests() {
  const saved = localStorage.getItem(storageKey);
  const requests = saved === null ? [] : JSON.parse(saved);
  if (!Array.isArray(requests)) {
    throw new Error("Invalid request list");
  }
  return requests;
}

function showRequests(requests) {
  const items = requests.map((request) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const badge = document.createElement("span");
    name.textContent = request.equipment;
    badge.textContent = request.priority;
    badge.className = "priority";
    badge.dataset.priority = request.priority;
    item.append(name, badge);
    return item;
  });

  requestList.replaceChildren(...items);
  requestList.hidden = items.length === 0;
  emptyState.hidden = items.length > 0;
}

try {
  showRequests(loadRequests());
} catch {
  emptyState.textContent = "Saved requests could not be loaded.";
}

equipment.addEventListener("input", () => equipment.setCustomValidity(""));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = equipment.value.trim();
  if (!name) {
    statusMessage.textContent = "";
    equipment.setCustomValidity("Enter an equipment name.");
    equipment.reportValidity();
    return;
  }
  if (!priorities.includes(priority.value)) {
    statusMessage.textContent = "Choose High, Medium, or Low priority.";
    return;
  }

  let requests;
  try {
    requests = loadRequests();
    requests.push({ equipment: name, priority: priority.value });
    localStorage.setItem(storageKey, JSON.stringify(requests));
  } catch {
    statusMessage.textContent = "The request could not be saved. Check that browser storage is available and try again.";
    return;
  }

  emptyState.textContent = "No requests yet.";
  showRequests(requests);
  form.reset();
  statusMessage.textContent = "Request added.";
  equipment.focus();
});
