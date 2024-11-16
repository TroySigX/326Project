import { BaseComponent } from '../BaseComponent/BaseComponent.js';

export class CurrentTripComponent extends BaseComponent {
  constructor() {
    super();
    this.loadCSS('CurrentTripComponent');
  }

  render() {
    // Create or find a specific container for this component's content
    let container = document.getElementById('sosContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'sosContainer';
      container.style.fontFamily = 'Arial, sans-serif';
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.overflow = 'hidden';
      container.style.height = '100vh';
      container.style.width = '100vw';
      container.style.position = 'relative';
      container.style.backgroundImage =
        "url('./components/CurrentTripComponent/hihi.jpg')";
      container.style.backgroundSize = 'cover';
      container.style.backgroundRepeat = 'no-repeat';
      container.style.backgroundPosition = 'center';
      document.body.appendChild(container);
    } else {
      container.innerHTML = ''; // Clear any previous content
    }

    // Create the countdown
    const countdown = document.createElement('div');
    countdown.id = 'countdown';
    countdown.style.position = 'absolute';
    countdown.style.top = '20%';
    countdown.style.left = '50%';
    countdown.style.transform = 'translateX(-50%)';
    countdown.style.display = 'flex';
    countdown.style.gap = '20px';
    countdown.style.background = 'rgba(0, 0, 0, 0.6)';
    countdown.style.borderRadius = '10px';
    countdown.style.padding = '20px';
    countdown.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';

    // Create the Edit button
    const editButton = document.createElement('button');
    editButton.id = 'editButton';
    editButton.textContent = 'Edit';
    editButton.style.position = 'absolute';
    editButton.style.top = '5px';
    editButton.style.left = '5px';
    editButton.style.background = 'rgba(255, 255, 255, 0.8)';
    editButton.style.border = 'none';
    editButton.style.borderRadius = '5px';
    editButton.style.padding = '5px 10px';
    editButton.style.cursor = 'pointer';
    editButton.style.fontSize = '14px';
    editButton.style.fontWeight = 'bold';
    editButton.addEventListener('click', () => {
      alert('Edit button clicked!'); // Replace with desired functionality
    });
    countdown.appendChild(editButton);

    // Create the time boxes
    const createInteractiveTimeBox = (id, label) => {
      const timeBox = document.createElement('div');
      timeBox.className = 'time-box';
      timeBox.style.textAlign = 'center';
      timeBox.style.color = 'white';
      timeBox.style.position = 'relative';

      const timeValue = document.createElement('span');
      timeValue.id = id;
      timeValue.className = 'time-value';
      timeValue.style.fontSize = '48px';
      timeValue.style.fontWeight = 'bold';
      timeValue.textContent = '00';

      const timeLabel = document.createElement('span');
      timeLabel.className = 'time-label';
      timeLabel.style.fontSize = '14px';
      timeLabel.style.textTransform = 'uppercase';
      timeLabel.style.opacity = '0.8';
      timeLabel.textContent = label;

      timeBox.appendChild(timeValue);
      timeBox.appendChild(document.createElement('br'));
      timeBox.appendChild(timeLabel);

      return timeBox;
    };

    countdown.appendChild(createInteractiveTimeBox('days', 'DAYS'));
    countdown.appendChild(createInteractiveTimeBox('hours', 'HOURS'));
    countdown.appendChild(createInteractiveTimeBox('minutes', 'MINUTES'));
    countdown.appendChild(createInteractiveTimeBox('seconds', 'SECONDS'));
    container.appendChild(countdown);

    // Create the HELP button
    const helpButton = document.createElement('button');
    helpButton.id = 'helpButton';
    helpButton.textContent = 'HELP';
    helpButton.style.position = 'absolute';
    helpButton.style.top = 'calc(20% + 150px)'; // Adjust the position below the countdown box
    helpButton.style.left = '50%';
    helpButton.style.transform = 'translateX(-50%)';
    helpButton.style.background = 'red';
    helpButton.style.color = 'white';
    helpButton.style.border = 'none';
    helpButton.style.borderRadius = '50%';
    helpButton.style.width = '80px';
    helpButton.style.height = '80px';
    helpButton.style.fontSize = '16px';
    helpButton.style.fontWeight = 'bold';
    helpButton.style.cursor = 'pointer';
    helpButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';

    // Add click functionality for the HELP button
    helpButton.addEventListener('click', () => {
      alert('HELP button clicked!'); // Replace with desired functionality
    });

    container.appendChild(helpButton);

    return container;
  }
}
