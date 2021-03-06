<?php

namespace Solarium\Plugin\MinimumScoreFilter;

use Solarium\Component\Result\Grouping\ValueGroup as StandardValueGroup;

/**
 * MinimumScoreFilter ValueGroupResult.
 */
class ValueGroupResult extends StandardValueGroup
{
    /**
     * @var float
     */
    protected static $overallMaximumScore;

    /**
     * @var string
     */
    protected $filterMode;

    /**
     * @var float
     */
    protected $filterRatio;

    /**
     * @var bool
     */
    protected $filtered = false;

    /**
     * Constructor.
     *
     * @param string $value
     * @param int    $numFound
     * @param int    $start
     * @param array  $documents
     * @param int    $maximumScore
     * @param Query  $query
     */
    public function __construct($value, $numFound, $start, $documents, $maximumScore, $query)
    {
        $this->filterMode = $query->getFilterMode();
        $this->filterRatio = $query->getFilterRatio();

        // Use the maximumScore of the first group as maximum for all groups
        if ($maximumScore > self::$overallMaximumScore) {
            self::$overallMaximumScore = $maximumScore;
        }

        parent::__construct($value, $numFound, $start, $documents);
    }

    /**
     * Get all documents, apply filter at first use.
     *
     * @return array
     */
    public function getDocuments()
    {
        if (!$this->filtered) {
            $filter = new Filter();
            $this->documents = $filter->filterDocuments($this->documents, self::$overallMaximumScore, $this->filterRatio, $this->filterMode);
            $this->filtered = true;
        }

        return $this->documents;
    }
}
