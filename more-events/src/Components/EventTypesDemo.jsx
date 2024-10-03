import React, { useState } from 'react';
import './EventTypesDemo.css';

const EventTypesDemo = () =>
{
    const [clickCount, setClickCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    const [lastKeyEvent, setLastKeyEvent] = useState('');
    const [lastEvent, setLastEvent] = useState(null);

    const handleClick = (e) =>
    {
        setClickCount(prevCount => prevCount + 1);
        setLastEvent(e);
    };

    const handleChange = (e) =>
    {
        setInputValue(e.target.value);
        setLastEvent(e);
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
        setLastEvent(e);
    };

    const handleMouseEnter = (e) =>
    {
        setIsHovering(true);
        setLastEvent(e);
    };

    const handleMouseLeave = (e) =>
    {
        setIsHovering(false);
        setLastEvent(e);
    };

    const handleKeyEvent = (eventType) => (e) =>
    {
        setLastKeyEvent(`${eventType}: ${e.key}`);
        setLastEvent(e);
    };

    const renderEventDetails = () =>
    {
        if (!lastEvent) return null;

        const eventDetails = {
            type: lastEvent.type,
            target: lastEvent.target.tagName,
            timestamp: lastEvent.timeStamp,
        };

        if (lastEvent.key) eventDetails.key = lastEvent.key;
        if (lastEvent.buttons) eventDetails.buttons = lastEvent.buttons;

        return (
            <pre>{JSON.stringify(eventDetails, null, 2)}</pre>
        );
    };

    return (
        <div className="event-demo-container">
            <h1>React Event Types Demo</h1>

            <section>
                <h2>onClick Event</h2>
                <button onClick={handleClick}>Click me</button>
                <p>Click count: {clickCount}</p>
            </section>

            <section>
                <h2>onChange and onSubmit Events</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type something..."
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>Submitted value: {submittedValue}</p>
            </section>

            <section>
                <h2>onMouseEnter and onMouseLeave Events</h2>
                <div
                    className={`hover-box ${isHovering ? 'hovering' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Hover over me
                </div>
                <p>{isHovering ? 'Hovering!' : 'Not hovering'}</p>
            </section>

            <section>
                <h2>Keyboard Events</h2>
                <input
                    type="text"
                    onKeyDown={handleKeyEvent('onKeyDown')}
                    onKeyUp={handleKeyEvent('onKeyUp')}
                    placeholder="Type to test keyboard events..."
                />
                <p>Last key event: {lastKeyEvent}</p>
            </section>

            <section>
                <h2>Last Event Details</h2>
                {renderEventDetails()}
            </section>
        </div>
    );
};

export default EventTypesDemo;