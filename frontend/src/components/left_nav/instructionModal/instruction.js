import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default class Instruction extends Component {
  render() {
    return (
      <div className="instruction-container">
        <div className="content">
          <h1>FAQ</h1>

          <h3>What is FlashCode?</h3>
          <p>
            FlashCode is a flashcard system for <a href="https://leetcode.com/">LeetCode</a> users.
          </p>
          <p>
            It tracks the LeetCode problem solved and automatically creates review timeline based on
            user's comfortable/confidence rating
          </p>
          <h3>How to create a card?</h3>
          <p>
            <ol>
              <li>
                Click on the <strong>Add Card</strong> blue button.
              </li>
              <li>
                Fill in the problem number for the problem you just solved on{' '}
                <a href="https://leetcode.com/">LeetCode</a>.
              </li>
              <li>
                Rate it based on your comfortable/confidence level. Repetition interval for easier
                problem is longer than more difficult ones{' '}
              </li>
              <li>(Optional) Jot down any notes/tips for yourself</li>
              <li>
                Click on the <strong> Create Card</strong> blue button to finish the process
              </li>
            </ol>
          </p>
          <h3>What are the decks?</h3>
          <p>
            <ul>
              <li>
                <strong>My Cards</strong>: contains all of user's cards
              </li>
              <li>
                <strong>Daily Deck</strong>: contains cards/problems that are due for review today.
                Your goal is to keep this deck empty.
              </li>
              <li>
                <strong>Difficult/Medium/Easy Decks</strong>: contain cards corresponding to the
                user's rating (NOT LEETCODE RATING)
              </li>
            </ul>
          </p>
          <h3>Why are the borders red on some of the cards?</h3>
          <p>
            It's the indication that this particular card is more than 3 days over-due for review
          </p>
          <h3>How do I review?</h3>
          <p>
            <ol>
              <li>
                Attempt to solve the problem again (clicking on the problem number on the card will
                take you to the corresponding page on LeetCode)
              </li>
              <li>
                Flip over the card to see/update your notes by clicking the right arrow{' '}
                <FontAwesomeIcon icon={faAngleRight} /> icon
              </li>
              <li>Update the confidence rating</li>
            </ol>
          </p>
        </div>
      </div>
    );
  }
}
