#Design system
* Organization
* Maintainability
* Responsiveness
* Scalability

##design patterns and organization
* each pattern describes a problem that occurs in our environment
* **element** - building blocks of the universe - use to define general styles
	* inputs
	* headings
	* buttons
	* labels
	* etc.
* **module** - groups of elements that function together as a unit - base for common patterns
	* search form "module"
		* input, 
		* label, and
		* button
* **component** - groups of modules (and possibly elements) joined together to create distinct interface elements
	* master header
		* logo, 
		* nav items, and
		* search form
* **templates** - starting point for client engagement to combine elements, modules, and components into page layouts
	* home page
		* master header,
		* navigation, 
		* body copy,
		* master footer

##Code convention and element definition

The aim of a component/template/object-oriented architecture is to be able to develop a limited number of reusable components that can contain a range of different content types.

###HTML semantics

Most semantics are related to aspects of the nature of the existing or expected content (H1 - H6, email value type attribute).

* always use lowercase tag and attribute names.
* write one discrete element per line.
* use one additional level of indentation for each nested element.
* always include closing tags.

####attribute order
* class
* id
* data-*

```<a class="[value]" id="[value]" data-name="[value]" href="[url]">[text]</a>```


###class name semantics

Whatever names are being used: they should have meaning, they should have purpose.

* derive class name semantics from repeating structural and functional patterns in a design. The most reusable components are those with class names that are independent of the content.
* don't be afraid to include additional HTML elements if they help create more robust, flexible, and reusable components.

####class naming convention

* component
* module
* attribute
* state

```
.component {}
.component-module {}
.component_attribute {}
.component_is-focused {}

```
###javascript

####prepare

####plan

####perform

####perfect

---


####naming UI components

Provide more specific or meaningful naming alongside the generic class, particularly when several generic classes come together.

```
class="tabbed-nav" data-ui-component="Main Nav"

```

###components, modules, and elements

####core
* palette
* type
* media-queries
	* small
	* medium
	* large
	* x-large
	* 2x-large
* padding
	* top-padding
	* right-padding
	* bottom-padding
	* left-padding
	* vertical
	* horizontal
* radius
	* base
	* large
	* small
	* top-radius
	* right-radius
	* bottom-radius
	* left-radius
* line-height
	* base
	* large
	* small
* gradients
* keyframes
* transitions
* transform
* box-sizing
* borders

####elements
* buttons
* form controls
* lists
* images
	* thumbnails
* tables
* badges
* tooltips
* highlights
* video

####modules
* button groups
* switches
* indicators
* navigation
	* horizontal
	* vertical
	* icons
	* sidebar
	* section
	* fixed
	* off canvas
	* breadcrumbs
	* pagination
* forms
	* inline
	* horizontal
	* controls
	* states
	* sizing
	* help text
	* validation
	* input groups
		* basic
		* sizing
		* checkboxes and radio buttons
		* button add-on
		* button with drop down
		* segmented buttons
* dialogs
* menus
* pickers
	* date
	* time
* toolbars

####components
* product listing
* cart
* content slider
* gallery

####utilities
* grid - u
* block grid - u

####buttons
* standard button
* button groups
	* styled
	* stacked
	* button bar
	* advanced
* split buttons
* drop-down buttons
* vertical buttons
* nested buttons
* button options
* button sizes
* button states
* accessibility

####typography
* headers
* sub-headers
* paragraphs
* links
* lists
* quotes
* addresses
* print styles

####prompts
* modals
	* basic
	* intermediate
	* advanced
* alerts
* panels
* tooltips
* tour

####content
* icons
* drop-downs
* tables
* pricing tables
* progress bars
* accordions
* tabs
* labels
* badges
* show/hide
	* screen size
	* orientation
	* screen-readers
	* skip links

####utility
* utility classes
	* float left / float right / clear
	* element border radius
	* element rounded corners
	* text align
		* left
		* right
		* center
		* justified
	* hide

