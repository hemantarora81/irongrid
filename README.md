# 🧱 IronGrid: The React Grid That Just Works

**IronGrid** is a blazing-fast, enterprise-ready, fully customizable data grid built from scratch in React, TypeScript, and Tailwind CSS.

It is designed to replace bloated, hard-to-customize grids like **Syncfusion** and **AG-Grid**, while offering modern UX, flexibility, and performance without any third-party dependencies.

---

## 🚀 Why IronGrid?

**For developers, by developers.**
IronGrid focuses on the 3 pillars every React engineer cares about:

* 💡 **Developer Experience (DX):** clean API, typed props, intuitive behavior
* 🎨 **Beautiful UI:** fully styled with Tailwind, themeable and responsive
* 🧱 **Modular Power:** enable only the plugins you need, nothing more

---

## 💼 Who Is It For?

* Enterprise app teams who need full control
* Frontend engineers building dashboards or CRMs
* Open-source projects and SaaS startups
* Developers tired of overcomplicated grids

---

## 🔧 Core Features (Always Available)

| Feature                | Description                            |
| ---------------------- | -------------------------------------- |
| ✅ **Type-safe API**    | Fully generic over `Grid<T>`           |
| ✅ **Column Config**    | Custom field access, header, rendering |
| ✅ **Tailwind Styling** | Clean design, easy to override         |
| ✅ **Accessibility**    | ARIA + keyboard navigation             |
| ✅ **Dark Mode Ready**  | Fully themeable                        |
| ✅ **Composable UI**    | Grid, Row, Cell, Header all components |

---

## 🔌 Plugin Features (Enable via Props)

> Activated via props like:

```tsx
<Grid sorting filtering pagination editing />
```

### Enterprise-Level Grid Features

| Plugin                 | Purpose                          |
| ---------------------- | -------------------------------- |
| 🔢 **Sorting**         | Single/multi-column sorting      |
| 🔍 **Filtering**       | Excel-style dropdown filters     |
| 📄 **Pagination**      | Page-wise navigation             |
| ✍️ **Inline Editing**  | Click to edit cells              |
| 📄 **Export to CSV**   | Save current grid                |
| 🧱 **Row Grouping**    | Collapsible row groups           |
| ✔️ **Selection**       | Checkboxes + bulk actions        |
| 🚀 **Virtual Scroll**  | 10,000+ rows, smooth UX          |
| 🎨 **Custom Renderer** | Fully custom cells/rows          |
| ↔️ **Column Resize**   | Drag to resize columns           |
| 🔄 **Column Reorder**  | Drag to move columns             |
| 🌍 **i18n Support**    | Language/date/number formats     |
| 📌 **Sticky Columns**  | Freeze columns (left/right)      |
| 🔧 **Toolbar Support** | Global buttons, filters, actions |
| 📂 **Detail Row**      | Expand row to show more data     |
| ✅ **Validation Rules** | Per-cell rules, errors           |

---

## 🧰 Developer Features

| Dev Feature                | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| ⚙️ **Plugin Isolation**    | Add or remove plugins freely                         |
| 📦 **Tree-shakable**       | Only bundle what you use                             |
| 🧪 **100% Test Coverage**  | Built with unit & integration tests                  |
| 🧱 **Headless Hooks API**  | `useSorting`, `useFiltering`, etc. for custom builds |
| 🎯 **Server Mode Support** | Backend-driven filtering/sorting                     |
| 🧰 **Theming**             | Custom classNames, themes, Tailwind tokens           |

---

## 🧪 Example Usage

```tsx
<Grid
  data={data}
  columns={[
    { field: 'name', header: 'Name', filter: 'text', editable: true },
    { field: 'age', header: 'Age', filter: 'numberRange' },
    { field: 'status', header: 'Status', filter: 'checkbox', options: ['Active', 'Inactive'] },
  ]}
  sorting
  filtering
  pagination
  editing
  selection
/>
```

---

## 📦 Installation (Coming Soon)

```bash
npm install @irongrid/react
```

---

## 🌟 Our Promise

IronGrid will always be:

* 🧠 Predictable
* 🔌 Composable
* 🧪 Tested
* ⚡ Fast
* 🧱 Extensible
* 💡 Developer-First

---

## 🔓 License

**MIT** — Use it, extend it, make it yours.

---

> Designed by developers. For developers. With no limits.
> Welcome to the future of data grids: IronGrid – APoweredGrid ✨
